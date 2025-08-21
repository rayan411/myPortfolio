import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
sending = false;
status: 'idle' | 'success' | 'error' = 'idle';

onSubmit(e: Event) {
  e.preventDefault();
  if (this.sending) return;

  const form = e.target as HTMLFormElement;
  const data = new FormData(form);

  this.sending = true;
  this.status = 'idle';

  fetch('https://formspree.io/f/myzpdqpd', {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  })
    .then(async (res) => {
      this.sending = false;
      if (res.ok) {
        this.status = 'success';
        form.reset();
      } else {
        // if its err from Formspree
        try { console.error('Formspree error:', await res.json()); } catch {}
        this.status = 'error';
      }
    })
    .catch((err) => {
      console.error(err);
      this.sending = false;
      this.status = 'error';
    });
}

}
