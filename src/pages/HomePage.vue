<template>
  <div>
    <div>
      <div class="flex gap-2">
        <div class="button-container">
          <button class="button-style">Categories ></button>
        </div>
        <div class="button-container">
          <button class="button-style">Subforums</button>
        </div>
        <div class="button-container">
          <button class="button-style">Latest</button>
        </div>
        <div class="button-container">
          <button class="button-style">Top</button>
        </div>
        <div class="button-container">
          <button class="button-style">LeaderBoard</button>
        </div>
      </div>
      <div class="pt-8 text-text_color text-md">Online(45): Niknames</div>
    </div>
    <div class="pt-8 flex justify-between gap-10">
      <div class="flex-grow">
        <div class="pt-8 text-text_color text-md">Subforum</div>
        <div class="border-t-2 border-text_color mt-2"></div>
      </div>
      <div class="flex-grow">
        <div class="pt-8 text-text_color text-md">Latest topics</div>
        <div class="border-t-2 border-text_color mt-2"></div>
      </div>
    </div>
  </div>
</template>

<style>
.button-container {
  display: inline-block;
}

.button-style {
  padding: 0.5rem 1rem;
  border: 2px solid #dddee0;
  color: #dddee0;
  font-size: 1.125rem;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.button-style:hover {
  background-color: #dddee0;
  color: #424255;
}
</style>
