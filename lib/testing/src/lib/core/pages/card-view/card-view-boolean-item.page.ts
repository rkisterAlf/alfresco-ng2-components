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

import { element, by, ElementFinder, Locator } from 'protractor';
import { BrowserActions, BrowserVisibility } from '../../utils/public-api';

export class CardBooleanItemPage {

    rootElement: ElementFinder;
    labelLocator: Locator = by.css('div[data-automation-id*="card-boolean-label"]');
    checkbox: Locator = by.css('mat-checkbox[data-automation-id*="card-boolean"]');

    constructor(label: string = 'assignee') {
        this.rootElement = element(by.xpath(`//div[contains(@data-automation-id, "label-${label}")]/ancestor::adf-card-view-boolitem`));
    }

    async checkboxClick(): Promise<void> {
        await BrowserActions.click(this.rootElement.element(this.checkbox));
    }

    async checkLabelIsPresent(): Promise<void> {
        const labelElement: ElementFinder = this.rootElement.element(this.labelLocator);
        await BrowserVisibility.waitUntilElementIsPresent(labelElement);
    }
}
