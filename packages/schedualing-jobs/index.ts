import schedule from 'node-schedule';
import { getUsersData } from './functions/getUsersData';

console.log('Before job instantiation');

const job = schedule.scheduleJob('*/1 * * * *', getUsersData);


