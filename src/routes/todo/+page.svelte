<script>
    let newItem = '';
	
    let todoList = [

	];
	
	function addToList() {
		todoList = [...todoList, {text: newItem, status: false}];
		newItem = '';
	}
	
	function removeFromList(index) {
		todoList.splice(index, 1)
		todoList = todoList;
    }


</script>

<h3>todo list, ta bort syssla genom att klicka på 🗑️🌺</h3>

<input bind:value={newItem} type="text" placeholder="skriv in en ny syssla...">
<button class= "läggtill" on:click={addToList}>Lägg till</button>

<h1>☘️🌸🌴🎀☘️🌸🌴🎀☘️🌸🌴🎀☘️🌸🌴🎀☘️🌸🌴🎀☘️</h1>


<br/>
{#each todoList as item, index}
	<input bind:checked={item.status} type="checkbox">
	<span class:checked={item.status}>{item.text}</span>
	<span on:click={() => removeFromList(index)}>🗑️🌺</span>
	<br/>
{/each} 


<style> 
	.checked {
        text-decoration: line-through;
        color: rgba(150, 254, 144, 0.993);
    }
	.läggtill{
		color: rgb(252, 250, 251);
		font-family: 'cambria';
		font-size: 1em;
		background-color: rgb(23, 125, 42);
	}

	h3 {
		color: rgb(244, 164, 228);
		font-family: 'cambria';
		font-size: 2em;
	}

</style> 