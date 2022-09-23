import { readable, writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

let innerWidth;

if(browser) {
  innerWidth = window.innerWidth;
}

export const chatLog = writable([]), deviceWidth = readable(innerWidth), animated = writable(false),
derivedLog = derived([chatLog, deviceWidth], ([$chatLog, $deviceWidth]) => {
  if($chatLog.length > 2 && $deviceWidth <= 700){
    const length = $chatLog.length;
    return $chatLog.slice(length - 2);
  } else {
    return $chatLog;
  }
})
