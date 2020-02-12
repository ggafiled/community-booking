<template>
  <v-container>
    <RoomCardComponent name="STANDARD ROOM" :document="[1,2,3,4,5,6,7,8,9,10]"/>
    <RoomCardComponent name="DELUX ROOM" :document="[1,2,3,4,5,6,7]"/>
    <RoomCardComponent name="PREMIUM ROOM" :document="[1,2,3,4]"/>
  </v-container>
</template>
<script>
    import RoomCardComponent from '@/components/helper/RoomCardComponent'
  export default {
    data() {
      return {

      }
    },
    components: {
        RoomCardComponent
    }
  }

</script>

