import exercise from './exercise';
import exercises from './exercises';

export default {
  getExercise() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(exercise);
      }, 200);
    })
  },

  getExercises() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(exercises);
      }, 200);
    })
  }
}
