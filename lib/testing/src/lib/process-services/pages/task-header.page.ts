/*!
 * @license
 * Copyright 2019 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CardTextItemPage } from '../../core/pages/card-view/card-view-text-item.page';
import { CardDateItemPage } from '../../core/pages/card-view/card-view-date-item.page';

export class TaskHeaderPage {

    assignee = new CardTextItemPage('assignee');
    status = new CardTextItemPage('status');
    priority = new CardTextItemPage('priority');
    dueDate = new CardDateItemPage('dueDate');
    category = new CardTextItemPage('category');
    parentName = new CardDateItemPage('parentName');//ce e adf-card-view-mapitem? 
    createdDate = new CardDateItemPage('created');
    duration = new CardTextItemPage('duration');
    parentTaskId = new CardTextItemPage('parentTaskId');
    endDate = new CardDateItemPage('endDate');
    id = new CardTextItemPage('id');
    description = new CardTextItemPage('description');
    formName = new CardTextItemPage('formName');

    async isIdFieldDisplayed(): Promise<boolean> {
        try {
            await this.id.checkLabelIsVisible();
            return true;
        } catch (e) {
            return false;
        }
    }

    async getIdFieldValue(): Promise<string> {
        return this.id.getFieldValue();
    }

    async isStatusFieldDisplayed(): Promise<boolean> {
        try {
            await this.status.checkLabelIsVisible();
            return true;
        } catch (e) {
            return false;
        }
    }

    async getStatusFieldValue(): Promise<string> {
        return this.status.getFieldValue();
    }

    async isPriorityFieldDisplayed(): Promise<boolean> {
        try {
            await this.priority.checkLabelIsVisible();
            return true;
        } catch (e) {
            return false;
        }
    }

    async getPriorityFieldValue(): Promise<string> {
        return this.priority.getFieldValue();
    }

    async setPriorityFieldValue(priority): Promise<void> {
        await this.priority.enterTextField(priority);
    }
}
