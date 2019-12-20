import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [BlogComponent, BlogListComponent],
  imports: [CommonModule, BlogRoutingModule, ComponentsModule, MaterialModule],
})
export class BlogModule {}
