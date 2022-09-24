<script>
  import Icon from '@iconify/svelte';
  import { collapsed, alert } from './stores';

  let alertMessage = '', icon;

  alert.subscribe( value => {
    alertMessage = value ? 'message awaiting' : '';
  })

  function toggleView() {
    if($collapsed) {
      collapsed.set(false);
      alert.set(false);
    }
    else {
      collapsed.set(true);
    }
  }
</script>

{#if $collapsed}
  <div id='chat-alert' class:collapsed={$collapsed}>{alertMessage}</div>
{/if}
{#if $collapsed }
  <div id="chat-indicator" class:collapsed={$collapsed} on:click|preventDefault={toggleView}><Icon icon="ei:check" width='20' height='20' /></div>
{:else}
  <div id="chat-indicator" class:collapsed={$collapsed} on:click|preventDefault={toggleView}><Icon icon="ei:close-o" width='20' height='20' /></div>
{/if}

<style>
  #chat-alert {
    text-align: center;
  }
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
    background-color: #BF5067;
    border-radius: 3px;
    border: 1px solid;
  }

  #chat-indicator.collapsed:hover {
    background-color: #9BAD8C;
    border-radius: 3px;
    border: 1px solid;
  }

  .collapsed {
    bottom: 0px;
    left: 0px;
  }

  #chat-alert.collapsed {
    position: absolute;
    bottom: 0px;
    right: 0px;
    margin: 2px;
  }

</style>
