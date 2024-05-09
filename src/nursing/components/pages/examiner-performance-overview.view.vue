<script>
import {Examiner} from "../../model/examiner.entity.js";
import apiService from "../../services/nursing-api.service.js";
export default {
  name: "ex-per-over",
  data(){
    return{
      examiners: [],
      mentalStateExams: []
    };
  },
  methods: {
    calculateTotalScore(exam) {
      return exam.orientationScore + exam.registrationScore + exam.attentionAndCalculationScore + exam.recallScore + exam.languageScore;
    },
    calculateIndicators() {
      this.examiners.forEach(async examiner => {
        const response = await apiService.getMentalStateExamsByExaminersId(examiner.id);
        if (response && response.data) {
          const assignedExams = response.data;
          if (assignedExams.length > 0) {
            examiner.currentAssignedExamCount = assignedExams.length;
            examiner.averageAssignedExamScore = assignedExams.reduce((sum, exam) => sum + this.calculateTotalScore(exam), 0) / examiner.currentAssignedExamCount;
          }
          else {
            examiner.currentAssignedExamCount = 0;
            examiner.averageAssignedExamScore = 0;
          }
        }
        else {
          console.error('No data received from the API for exams');
        }
      }
      );
    }
  },
  async created(){
    try {
      const response = await apiService.getAllExaminers();
      if (response && response.data) {
        this.examiners = response.data.map(examiner => new Examiner(examiner));
        this.calculateIndicators();
      } else {
        console.error('No data received from the API for examiners');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
</script>

<template>
  <div class="drinkware">
    <pv-card v-for="examiner in examiners" class="product-card">
      <template #header>
        {{examiner.firstName}} {{examiner.lastName}}
      </template>
      <template #title>
        NPI: {{examiner.nationalProviderIdentifier}}
      </template>
      <template #subtitle>
        Mental State Exam Performance
      </template>
      <template #content>
        <p>Current Assigned Mental State Exam Count: {{ examiner.currentAssignedExamCount }}</p>
        <p>Average Assigned Mental State Exam Total Score: {{ examiner.averageAssignedExamScore }}</p>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.drinkware{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: start;
  text-align: center;
}

.product-card{
  border: 1px solid #214729;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
}
.product-card:hover{
  border: 1px solid #74ff64;
  cursor: pointer;
}
.product-card img, .product-card h2{
  width: 100%;
  height: auto;
  border-radius: 20px;
  display: block;
  padding-bottom: 10px;
}
.product-card p{
  margin: 5px 0;
}
</style>