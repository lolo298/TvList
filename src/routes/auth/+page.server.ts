import { redirect } from '@sveltejs/kit'

import type { Actions } from './$types'
import type { Provider } from '@supabase/supabase-js'

export const actions: Actions = {
  login: async ({ request, url, locals: { supabase } }) => {
    console.log('auth/+page.server.ts login action called')
    const formData = await request.formData()
    const submitType = formData.get('submit') as Provider

    const {error, data} = await supabase.auth.signInWithOAuth({
      provider: submitType,
      options: {
        redirectTo: `${url.origin}/auth/callback`,
      },
    })

    console.log('auth/+page.server.ts login action completed', { error, data })

    redirect(303, data.url ?? '/auth/error')

    


    // if (error) {
    //   console.error(error)
    //   console.log('Redirecting to /auth/error due to error in login action')
    //   redirect(303, '/auth/error')
    // } else {
    //   console.log('Redirecting to / due to successful login action')
    //   redirect(303, '/')
    // }
  },
}