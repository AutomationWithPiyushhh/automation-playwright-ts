import { Reporter, TestCase, TestResult } from '@playwright/test/reporter';

class CustomLogger implements Reporter {
  onTestBegin(test: TestCase) {
    console.log(`\n▶️ ટેસ્ટ શરૂ થયો: ${test.title}`);
  }

  onTestEnd(test: TestCase, result: TestResult) {
    if (result.status === 'passed') {
      console.log(`✅ ટેસ્ટ પાસ થયો: ${test.title}`);
    } else {
      console.log(`❌ ટેસ્ટ ફેલ થયો: ${test.title}`);
    }
  }
}

export default CustomLogger;
