export default function({ store, redirect }){
      // retrieving keys via object destructuring
      const isAuthenticated = store.state.authenticated
      console.log(isAuthenticated);
      if (!isAuthenticated) {
        return redirect('/todos')
      }
    }