import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-ads-banner',
    imports: [CommonModule],
    templateUrl: './ads-banner.component.html',
    styleUrls: ['./ads-banner.component.css'],
})
export class AdsBannerComponent implements OnInit, OnDestroy {
    ads = [
        { url: 'assets/banners/banner_2_176345.png', alt: 'Publicidad 1' },
        { url: 'assets/banners/banner_3_17638.png', alt: 'Publicidad 2' },
        { url: 'assets/banners/banner-3.png', alt: 'Publicidad 3' },
    ];

    currentAdIndex = 0;
    private timer: any;

    ngOnInit(): void {
        this.startRotation();
    }

    ngOnDestroy(): void {
        this.stopRotation();
    }

    startRotation() {
        this.timer = setInterval(() => {
            this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        }, 5000);
    }

    stopRotation() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
}
