import React from 'react'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormSignIn from '../components/Fragments/FormSignIn'

function SignInPage() {
  return (
    <AuthLayouts>
        <FormSignIn />
    </AuthLayouts>
  )
}

export default SignInPage;