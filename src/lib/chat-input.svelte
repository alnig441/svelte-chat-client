<script>
  import { chatLog, socket, disabled, collapsed } from './stores';

  let message;

  function onClick(e) {
    if(message) {
      const log = $chatLog;
      log.push({ type: 'message', isModerator: false, message: message });
      chatLog.set(log);
      $socket.emit('message', message);
      message = null  ;
    }
  }

  function onKeyUp(e) {
    const { key } = e;
    if(key.toLowerCase() === 'enter') {
      onClick();
    }
  }
</script>

<div id="chat-input" class:collapsed={$collapsed}>
  <input disabled={$disabled} bind:value={message} type="text" placeholder="enter message" class:collapsed={$collapsed}>
  <input disabled={$disabled} type="button" value="send" on:click|preventDefault={onClick} class:collapsed={$collapsed}>
</div>

<svelte:window on:keyup|preventDefault={onKeyUp} />

<style>
  #chat-input {
    position: absolute;
    bottom: 0px;
    max-height: 20px;
    display: inline-flex;
    flex-grow: 1;
  }
  input[type="text"] {
    width: 100%;
  }
  input[type="text"] {
  }

  .collapsed {
    display: none;
  }

  @media screen and (max-width: 700px) {
    #chat-input {
      border: 1px solid;
      border-radius: 3px;
    }
  }


</style>
