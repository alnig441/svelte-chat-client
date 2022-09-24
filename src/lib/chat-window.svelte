<script>
  import ChatEntry from "./chat-entry.svelte";
  import { collapsed } from './stores'

</script>

<div id="chat-window" class:collapsed={$collapsed}><ChatEntry /></div>

<style>
  #chat-window {
    width: 100%;
    max-height: 225px;
    /* max-height: 200px; */
    word-wrap: break-word;
    position: absolute;
    bottom: 25px;
    flex-grow: 10;
    overflow: scroll;
  }

  .collapsed, .collapsed > input {
    display: none;
  }

</style>
