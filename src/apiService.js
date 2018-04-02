import exercise from './exercise';

export default {
  getExercise() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(exercise);
      }, 200);
    })
  }
}
