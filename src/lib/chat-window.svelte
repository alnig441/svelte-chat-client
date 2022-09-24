<script>
  import ChatEntry from "./chat-entry.svelte";
</script>

<div id="chat-window"><ChatEntry /></div>

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

</style>
