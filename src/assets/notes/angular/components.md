# Angular Components

Components are the building blocks of Angular applications.

---

## Creating Component

```bash
ng generate component home
```

---

## Example

```typescript
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html'
})
export class HomeComponent {}
```

---

## Advantages

- Reusable
- Easy to Test
- Maintainable
- Standalone Support