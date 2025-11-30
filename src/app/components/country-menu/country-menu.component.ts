import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-country-menu',
    imports: [CommonModule],
    templateUrl: './country-menu.component.html',
    styleUrls: ['./country-menu.component.css'],
})
export class CountryMenuComponent {
    @Output() countrySelected = new EventEmitter<string>();

    countries = [
        { id: 'Colombia', name: '🇨🇴 Colombia' },
        { id: 'Mexico', name: '🇲🇽 México' },
        { id: 'Salvador', name: '🇸🇻 El Salvador' },
        { id: 'RD', name: '🇩🇴 R. Dominicana' },
        { id: 'Panama', name: '🇵🇦 Panamá' },
        { id: 'Otros', name: '🌎 Otros' },
    ];

    selectedCountry = 'Colombia';

    selectCountry(countryId: string) {
        this.selectedCountry = countryId;
        this.countrySelected.emit(countryId);
    }
}
