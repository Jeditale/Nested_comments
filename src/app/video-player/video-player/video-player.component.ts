import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  isPlaying = false;
  muted = false;
  volume = 0.5;
  currentTime = 0;
  videoDuration = 0;

  ngOnInit() {
    const videoElement = this.videoPlayer.nativeElement;
    videoElement.volume = this.volume;
    videoElement.onloadedmetadata = () => {
      this.videoDuration = videoElement.duration;
    };
  }

  playPause() {
    const videoElement = this.videoPlayer.nativeElement;
    if (this.isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  toggleFullscreen() {
    const videoElement = this.videoPlayer.nativeElement;
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.requestFullscreen) { // Firefox
      videoElement.requestFullscreen();
    } else if (videoElement.requestFullscreen) { // Chrome, Safari
      videoElement.requestFullscreen();
    } else if (videoElement.requestFullscreen) { // IE/Edge
      videoElement.requestFullscreen();
    }
  }

  toggleMute() {
    const videoElement = this.videoPlayer.nativeElement;
    videoElement.muted = !this.muted;
    this.muted = !this.muted;
  }

  seek(event: any) {
    const videoElement = this.videoPlayer.nativeElement;
    this.currentTime = parseFloat(event.target.value);
    videoElement.currentTime = this.currentTime;
  }

  updateProgress() {
    const videoElement = this.videoPlayer.nativeElement;
    this.currentTime = videoElement.currentTime;
  }

  onVolumeChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.volume = parseFloat(input.value);
    const videoElement = this.videoPlayer.nativeElement;
    videoElement.volume = this.volume;
  }
}
