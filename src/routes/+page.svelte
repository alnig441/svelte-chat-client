<script>
  import ChatIndicator from "$lib/chat-indicator.svelte";;
  import ChatInput from "$lib/chat-input.svelte";
  import ChatWindow from "$lib/chat-window.svelte";
  import { socket, chatLog, disabled, deviceWidth, collapsed, alert } from "$lib/stores";

  let isConnected = false;

  $socket.onAny(handleSocketEvent);

  function handleSocketEvent(event, message) {
    const entry = { isInfo: false, isModerator: true, message: message};
    const log = $chatLog;

    switch(event){
      case 'welcome':
        if(!isConnected) {
          isConnected = true;
        }
        else {
          entry.isInfo = true;
          entry.message = 'moderator rejoined';
          disabled.set(false);
        }
        break;

      case 'message':
        if($collapsed) {
          alert.set(true);
        }
        break;

      case 'moderator left':
        entry.isInfo = true;
        disabled.set(true);
        break;

      default:
        console.log(`unknown event: "${event}" \nmessage: "${message}"`);
        break;
    }

    log.push(entry);
    chatLog.set(log);
    // console.log($chatLog)
  }

</script>

{#if isConnected}
<div id="chat-client" class:collapsed={$collapsed}>
  {#if $deviceWidth > 700}
    <ChatIndicator />
  {/if}
  <ChatWindow />
  <ChatInput />
</div>
{/if  }

<style>
  #chat-client {
    position: absolute;
    bottom: 15px;
    left: 15px;
    display: flex;
    flex-direction: column;
    width: 175px;
    height: 250px;
    border: 1px solid;
    border-radius: 3px;
    opacity: 1;
  }

  #chat-client.collapsed {
    border: none;
  }

  @media screen and (max-width: 700px) {
    #chat-client {
      border: none;
    }
  }

</style>
