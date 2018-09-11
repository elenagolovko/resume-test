import { Component } from '@angular/core';
 
@Component({
    selector: 'my-app',
    template: ` <input class="app__search" type="search" placeholder="Поиск по ФИО"/>
                <personal-info></personal-info>
                <profile-navigation></profile-navigation>
                <div class="l-container">
                    <aside>
                        <progress-section></progress-section>
                        <enrollments-section></enrollments-section>
                        <advice-section></advice-section>
                    </aside>
                    <main class="main-content">
                        <goals-section></goals-section>
                    </main>
                </div>`
})

export class AppComponent {}