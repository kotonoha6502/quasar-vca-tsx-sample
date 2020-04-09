import { QTabs, QRouteTab } from 'quasar'
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  components: {QTabs, QRouteTab},
  setup() {
      const state = reactive({
      left: false
    })

    return () => (
      <q-layout view="hHh lpR fFf">

      <q-header elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar>
          <q-btn dense flat round icon="menu" onclick={() => {state.left = !state.left}} />

          <q-toolbar-title>
            その他OAチームKAIZNE
          </q-toolbar-title>
        </q-toolbar>

        <q-tabs align="left" >
          <q-route-tab to="/" label="週例資料" />
          <q-route-tab to="/" label="Page Two" />
          <q-route-tab to="/" label="Page Three" />
        </q-tabs>
      </q-header>

      <q-drawer v-model={state.left} side="left" overlay behavior="desktop" bordered>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>

    </q-layout>
    )
  }
})
