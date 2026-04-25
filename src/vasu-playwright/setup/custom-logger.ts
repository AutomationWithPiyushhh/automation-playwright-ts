import { Reporter, TestCase, TestResult } from '@playwright/test/reporter';

class CustomLogger implements Reporter {
  onTestBegin(test: TestCase) {
    console.log(`\n Test Started : ${test.title}`);
  }

  onTestEnd(test: TestCase, result: TestResult) {
    if (result.status === 'passed') {
      console.log(`✅ Test Passed : ${test.title}`);
    } else {
      console.log(`❌ Test Failed : ${test.title}`);
    }
  }
}

export default CustomLogger;
