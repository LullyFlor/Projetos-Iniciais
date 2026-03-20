function orderFromBoss() {
  return new Promise(function(resolve, reject) {
    let isCodeDone = false;
    console.log("Finish the code, it's an order!");
    resolve(isCodeDone);
  });
}

function coding(isCodeDone) {
  return new Promise(function(resolve, reject) {
    if (!isCodeDone) {
      console.log("Working...");
      isCodeDone = true;
      resolve(isCodeDone);
    } else {
      reject("No instructions from boss yet.");
    }
  });
}

function performanceReview(isCodeDone) {
  return new Promise(function(resolve, reject) {
    if (isCodeDone) {
      resolve(
        "You kept your promise and finished the code. You're getting promoted!"
        );
    } else {
      reject(
        "You broke your promise, how can I trust you with bigger responsibilities?"
        );
    }
  });
}
async function randomDayAtWork() {
  try {
    const instruction = await orderFromBoss();
    const work = await coding(instruction);
    const review = await performanceReview(work);
    console.log(review);
  } catch (error) {
    console.log(error);
  }
}
randomDayAtWork();