<template>
  <header>
	  <h1>Rocket<span>Coffee</span></h1>
		<p>Open everyday, 8am ~ 9pm</p>
	</header>
</template>

<style scoped lang="css">
  header {
	  width: 100vw;
		padding: 2.75rem 0.75rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	header > h1 {
	  color: #1c1c1c;
		text-transform: uppercase;
	}

	header > h1 > span {
	  color: var(--brown);
	}

	header > p {
	  color: var(--gray);
	}
</style>
