import { defineComponent } from "@vue/composition-api";
import { QBtn } from 'quasar'

const addOne: (n: number) => number
            = n => n + 1

export default defineComponent({
  name: 'Hello',
  setup() {
    return () => (
      <div>
        <h3>Hello TSX + Quasar World!!!</h3>
        <QBtn>This is button!</QBtn>
      </div>
    )
  }
})
