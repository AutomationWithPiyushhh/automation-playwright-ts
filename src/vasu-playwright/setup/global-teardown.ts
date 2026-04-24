import { FullConfig } from '@playwright/test';

async function globalTeardown(config: FullConfig) {
  console.log('🏁 Global Teardown is running...');
  // ટેસ્ટ પૂરા થયા પછી સફાઈ (Cleanup) કરવાનું કામ અહીં થશે.
}

export default globalTeardown;
