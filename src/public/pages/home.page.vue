<script>
import {MentalStateExam} from "../../nursing/model/mental-state-exam.entity.js";
import apiService from "../../nursing/services/nursing-api.service.js";
export default {
  name: "home",
  data(){
    return{
      mentalStateExams: [],
      examCount: 0,
      highestScore: 0,
      lowestScore: 0,
      averageScore: 0
    };
  },
  methods: {
    calculateTotalScore(exam) {
      return exam.orientationScore + exam.registrationScore + exam.attentionAndCalculationScore + exam.recallScore + exam.languageScore;
    },
    calculateIndicators() {
      this.examCount = this.mentalStateExams.length;
      this.highestScore = Math.max(...this.mentalStateExams.map(exam => this.calculateTotalScore(exam)));
      this.lowestScore = Math.min(...this.mentalStateExams.map(exam => this.calculateTotalScore(exam)));
      this.averageScore = this.mentalStateExams.reduce((sum, exam) => sum + this.calculateTotalScore(exam), 0) / this.examCount;
    }
  },
  async created(){
    try {
      const response = await apiService.getAllMentalStateExams();
      if (response && response.data) {
        this.mentalStateExams = response.data.map(mentalStateExam => new MentalStateExam(mentalStateExam));
        this.calculateIndicators();
      } else {
        console.error('No data received from the API');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
}
</script>

<template>
  <div class="home">
    <div class="info">
      <h1>{{$t('home')}}</h1>
      <p>Welcome to HIGN</p>
    </div>
    <div class="card-home">
      <pv-card class="mentalAnalytics-card" aria-labelledby="home-heading">
        <template #title>
          <div class="title" >
            <h2>Mental State Exam Analytics</h2>
          </div>
        </template>
        <template #subtitle>
          Score Analytics
        </template>
        <template #content>
          <p>Exam Count: {{ examCount }}</p>
          <p>Highest Score: {{ highestScore }}</p>
          <p>Lowest Score: {{ lowestScore }}</p>
          <p>Average Score: {{ averageScore }}</p>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.home h1{
  text-align: center;
  font-size: 3vw;
}

.info {
  text-align: center;
}
.info p {
  font-size: 1.5vw;
}
.card-home{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title{
  text-align: center;
}
.title h2 {
  font-size: 2vw;
}
.mentalAnalytics-card{
  border: 1px solid #214729;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  display: flex;
  align-items: center;
  max-width: 600px;
}
.mentalAnalytics-card:hover{
  border: 1px solid #74ff64;
  cursor: pointer;
}
.mentalAnalytics-card p{
  margin: 5px 0;
  font-size: 1vw;
}

@media (max-width: 600px) {
  .home h1{
    font-size: 6vw;
  }
  .info p {
    font-size: 3vw;
  }
  .title h2 {
    font-size: 5vw;
  }
  .mentalAnalytics-card p{
    font-size: 2.5vw;
  }
}
</style>