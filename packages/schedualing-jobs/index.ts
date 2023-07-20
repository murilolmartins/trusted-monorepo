import { getUsersData } from './functions/getUsersData';

import schedule from 'node-schedule';

console.log('Before job instantiation');

const job = schedule.scheduleJob('*/1 * * * *', getUsersData);
