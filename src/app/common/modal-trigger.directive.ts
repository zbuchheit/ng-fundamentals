import { trigger } from '@angular/animations';
import { Directive, Inject, OnInit, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from '.';

@Directive(
  { selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('model-trigger') modelId: string;
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $ :any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$(`#${this.modelId}`).modal({});
    })
  }
}