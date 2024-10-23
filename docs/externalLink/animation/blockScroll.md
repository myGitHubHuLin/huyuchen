<h1>Animate On Scroll</h1>
    <div class="view">
      <div class="block" v-for="item in 20"></div>
    </div>

 <script setup>

</script>
<style>
      .view {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }
      .block {
        height: 200px;
        width: 300px;
        margin: 50px;
        border: 0.5mm solid black;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      }
      .block:nth-child(odd) {
        background: rgb(232, 88, 67);
      }
      .block:nth-child(even) {
        background: rgb(26, 84, 207);
      }
      @keyframes appear {
        from {
          opacity: 0;
          clip-path: inset(100% 100% 0 0);
        }
        to {
          opacity: 1;
          clip-path: inset(0 0 0 0);
        }
      }
      .block {
        animation: appear 1s linear;
        animation-timeline: view();
        animation-range: entry 0% cover 40%;
      }
</style>
