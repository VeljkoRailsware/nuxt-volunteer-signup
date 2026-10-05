import {toWebRequest,sendWebResponse,getRequestIP} from 'h3';
import {handle} from '../../../src/core/http.js';
export default defineEventHandler(async event=>sendWebResponse(event,await handle(toWebRequest(event),getRequestIP(event)||'shared-client')));
