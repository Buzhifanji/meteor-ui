<script lang="ts">
  import '../packages/button/index';
  let color: any = null;
  let testName = 0;
  function changeColor() {
    color = color ? null : 'red';
  }
</script>

<main>
  <h1>One UI</h1>
  <my-counter />
  <one-button attrType="submit" {color} {testName}>default</one-button>
  <one-button type="primary">primary</one-button>
  <one-button type="info">info</one-button>
  <one-button type="warning">warning</one-button>
  <one-button type="success">success</one-button>
  <one-button type="danger">danger</one-button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
