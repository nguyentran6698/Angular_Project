import { outputAst } from '@angular/compiler';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('numberInput') numberInputRef!: ElementRef;
  // @Output() ingredientAdd = new EventEmitter<{
  //   name: string;
  //   amount: number;
  // }>();

  // onAddItem() {
  //   const newIngredient = new Ingredient(
  //     this.nameInputRef.nativeElement.value,
  //     this.numberInputRef.nativeElement.value
  //   );
  //   this.ingredientAdd.emit(newIngredient);
  // }
  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.numberInputRef.nativeElement.value
    );
    this.shoppingListService.addIngredient(newIngredient);
  }
}
