import { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  console.log('🚀 Global Setup is running...');
  // ભવિષ્યમાં અહીં આપણે એવો કોડ લખી શકીએ જે બધા ટેસ્ટ પહેલા માત્ર 1 જ વાર રન કરવો હોય.
}

export default globalSetup;