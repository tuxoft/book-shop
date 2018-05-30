import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Publisher } from '../../../../model/models';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PublisherService } from '../../../../services/rest/publisher.service';
import { NotificationsService } from '../../../../services/common/notification.service';

@Component({
  selector: 'app-publisher-create',
  templateUrl: './publisher-create.component.html',
  styleUrls: ['./publisher-create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PublisherCreateComponent implements OnInit {

  publisher: Publisher = {};
  publisherForm: FormGroup;

  constructor(private publisherService: PublisherService,
              private fb: FormBuilder,
              private notificationService: NotificationsService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.publisherForm = this.fb.group({
      name: '',
    });
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.publisherForm.reset({
      name: this.publisher.name,
    });
  }

  onSubmit() {
    this.publisher = this.prepareSavePublisher();
    this.publisherService.updatePublisher(this.publisher).subscribe(
      (success) => {
        this.notificationService.notify('success', '', 'Издательство успешно сохранено');
      },
      (error) => {
        let errorMsg = '';
        if (error && error.error && error.status === 422) {
          errorMsg = error.error.reduce(
            (prevValue, curValue) => {
              return prevValue + Object.values(curValue.constraints)
                .reduce(
                  (constrAccum, curConstr) => {
                    return (constrAccum as string) + (curConstr as string) + '\n';
                  },
                  '');
            },
            '');
        }

        if (error && error.error && error.status === 500) {
          errorMsg = error.error;
        }
        this.notificationService.notify('error', '',
                                        'Произошла ошибка при сохранении издательства:' + errorMsg);
      },
    );
    this.rebuildForm();
  }

  prepareSavePublisher(): Publisher {
    const formModel = this.publisherForm.value;

    const savePublisher: Publisher = {
      ...this.publisher,
      name: formModel.name,
    };

    return savePublisher;
  }

  revert() {
    this.rebuildForm();
  }
}
