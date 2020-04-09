import { defineComponent } from '@vue/composition-api'
import Hello from '@/components/Hello'

export default defineComponent({
  name: 'Index',
  setup() {
    return () => (
      <div>
        <Hello />
      </div>
    )
  }
})
