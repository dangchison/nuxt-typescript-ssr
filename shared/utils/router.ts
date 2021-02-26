import Vue from 'vue'
import { RawLocation } from 'vue-router'

export const push = (self: Vue, params: RawLocation) => {
  self.$router.push(self.localePath(params))
}
