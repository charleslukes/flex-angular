Use local refrence to get access to element in your component html template
ie #addMe, the local reference is only available in the template.

You can also use the @viewChild() decorator to pass element from your template
to the component.
@viewChild('addMe') localRef

const = localRef => ...
The view child is of type ElementRef. The ElementRef has a method nativeElement which you can use
to get the value of the localRef.

**LifeCycle Hooks**

1. ngOnChanges: called after a bound input property changes.
1. ngOninit: called once the component is intailzed. it will run after the constructor
1. ngDoCheck: called during every change detection run.
1. ngAfterContentInit: called after content( ng-content) has been projected into view
1. ngAfterContentChecked: called everytime project content has been checked.
1. ngAfterViewInit: Called After the component view (and child view) has been intailzed
1. ngAfterViewChecked: Called evrytime the view has been checked.
1. ngOnDestroy: called once a component is about to be destroyed.

You can create your own directives with the @Directive decorator.

**Services**

This is like a local storage where you centeralise your code, say you have some
codes that are repeated alot, you can put them in your services to use them anywhere
In your application.

    When you provde a service in a component, the same instance is available through out
    all the child or children of that component. When the services is provided at the application
    level the same instanceof that service will be available everywhere in the app.

    You can inject service into service, to do this, you need to provide the service that
    will be injected into the app module provider, and also in the recieving services
    add the @Injectables() decorator, to tell angular you want to inject a service.

**Routes**

This enables us to visit various url in our application. say for instance we can visit
a '/users', '/team/:id' etc routes.
To use the routes we load it in our app level so as to make it available to
everywhere in the application.
In the app module we import routes from @angular/core and use it this way.

```ts
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "user", component: UserComponent }
];
```

The Routes is from @angular/core and its is an array of objects containing path and component.
The path tells the angular what name the path is as in /users while the component
tells angular what component to display when routed to that path. Yet with all these
angular doesnt know how we want to use them.
We somehow need to inform angular that we are using these routes. At the imports in @NgModule
we pass a parameter called the RouterModule.forRoutes(routes);

On the template to make angular dynamically display your routes add the router outlet tag
ie <router-outlet></router-outlet>

You can load your routes relatively to the parent route, when you use routerLink in your
child component. To know which route is active you can use routerLinkActive, this attaches
a particular styles to the template when that component is active

```html
<li
  routerLinkActive="active"
  [routerLinkActiveOptions]="{exact: true}"
  routerLink="/"
>
  Home Page
</li>
<li></li>
<li routerLinkActive="active" routerLink="/admin">Admin Page</li>
<li></li>
<li routerLinkActive="active" routerLink="/user">User Page</li>
<li></li>
```

The above attaches a class active to the list tag it is on, when any of the routerLink is active.

We could also route to a component via the component class. we use the navigate method in
the Router object.

```ts
      constructor(private router: Router){}

      onClickUser{
          this.router.navigate(['/users']);
      }
```

Using the router in the component angular doesn't know which route ('/something/anotherthing') it is relative to, so at everytime we navigate to the '/users' using the router navigate like above, it attaches the /users to the domain name ie localhost:4200/users. we can make angular aware of this route it currently displays and attach our route('/users') to it by using ActivatedRoute from @angular/router

```ts
     constructor(private router: Router, private route: ActivatedRoute){}

      onClickUser{
          this.router.navigate(['/users'], {relativeTo: this.route});
      }
```

Don't forget to import from @angular/router.

Data can be passed dynamically via url in angular. when you delclare a path like so '/user/:id' youre telling angular that id is a dynamic value and should be anything you specify it to be. programmatically you can pass the dynamic values to the id in your component using the ActivatedRoute.

```ts
    constructor(private route: ActivatedRoute){}
    id: string;

    getRouteParams(){
        // gets the id of the activated route
       this.id = this.route.snapshot.params['id'];

       console.log(this.id);
    }
```

Sometimes we might want to listen to changes in the router params, the ActivatedRoute params has an observable we can listen to which is:

```ts
    constructor(private route: ActivatedRoute) implements Oninit{}
    id: string;

    ngOninit(){
        // listens for a change in the routes params
       this.id = this.route.params.subscribe(res => res['id'])
    }
```

We could pass fragment and queryParams eg: '/user/:id/?details=234#checking' to our routes using them on our template or programmatically. The queryParams comes with a question mark, while the fragment comes with an # tag.
