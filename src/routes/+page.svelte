<script>
  import ChatIndicator from "$lib/chat-indicator.svelte";;
  import ChatInput from "$lib/chat-input.svelte";
  import ChatWindow from "$lib/chat-window.svelte";
  import {deviceWidth} from "$lib/stores";

</script>

<div id="chat-client">
  <ChatIndicator />
  <ChatWindow />
  <ChatInput />
</div>

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

  @media screen and (max-width: 700px) {
    #chat-client {
      border: none;
    }
  }

</style>
