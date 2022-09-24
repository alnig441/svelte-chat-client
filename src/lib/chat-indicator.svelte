<script>
  import Icon from '@iconify/svelte';
</script>

<div id="chat-indicator"><Icon icon='majesticons:arrows-collapse-full-line' width='20' height='20' /></div>

<style>
  #chat-indicator {
    position: absolute;
    right: 0px;
    z-index: 1;
    opacity: 0.7;
    flex-grow: 1;
    width: 20px;
    height: 20px;
    max-height: 20px;
    max-width: 20px;
  }

  #chat-indicator:hover {
    /* color: #505ABF; */
    background-color: #BF5067;
    border-radius: 3px;
    border: 1px solid;
  }
</style>
