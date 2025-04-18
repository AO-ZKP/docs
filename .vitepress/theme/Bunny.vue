<template>
    <div class="bunny">
      <img src="/bunny.png" alt="A0 Labs Bunny" />
    </div>
  </template>
  
  <style>
  .bunny {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
  }
  
  @media (min-width: 768px) {
    .bunny {
      width: 6rem;
      height: 6rem;
    }
  }
  
  .bunny img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  </style>