type Result = 'success' | 'error' | 'pending';

const result_1: Result = 'success';
const result_2: Result = 'error';
const result_3: Result = 'pending';

const handleResult = (result: Result) => {
    console.log(`The result is: ${result}`);
}

handleResult(result_1);
handleResult(result_2);
handleResult(result_3);