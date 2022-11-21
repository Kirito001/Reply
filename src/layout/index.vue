<template>
	<v-app>
		<v-navigation-drawer
			class="pl-4"
			color="transparent"
			rail-width="64"
			width="280"
			floating
			:rail="rail"
		>
			<v-toolbar
				class="text-primary my-4"
				color="transparent"
				density="compact"
			>
				<v-toolbar-title v-show="!rail">REPLY</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn @click="rail=!rail" icon>
					<v-icon v-show="rail">mdi-menu</v-icon>
					<v-icon v-show="!rail">mdi-menu-open</v-icon>
				</v-btn>
			</v-toolbar>
			<v-btn
				height="48"
				color="tertiary-c"
				rounded="lg"
				variant="flat"
				block
			>
				<v-icon icon="mdi-pencil-outline"></v-icon>
				<span class="ml-3" v-show="!rail">conpose</span>
			</v-btn>
			<v-list class="mt-8">
				<v-list-item
					rounded="xl"
					active-color="primary"
					:class="{ 'px-3': rail }"
					v-for="item in lists"
					:key="item.path"
					:to="item.path"
				>
					<template #prepend>
						<v-icon class="mr-4" :icon="item.icon"></v-icon>
					</template>
					<v-list-item-title v-text="item.title"></v-list-item-title>
					<template #append>
						<v-btn
							size="x-small"
							v-text="item.message"
							v-if="item.message"
							flat
							icon
						></v-btn>
					</template>
				</v-list-item>
				<v-list-subheader v-show="!rail">Folders</v-list-subheader>
				<v-list-item
					rounded="xl"
					active-color="primary"
					v-for="item in folders"
					:key="item.title"
					v-show="!rail"
				>
					<template #prepend>
						<v-icon class="mr-4" icon="mdi-folder-outline"></v-icon>
					</template>
					<v-list-item-title v-text="item.title"></v-list-item-title>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
    <v-bottom-navigation
      color="primary"
      class="d-lg-none align-center"
      elevation="0"
      mandatory
      grow
    >
      <div class="px-2 flex-grow-1 d-flex justify-space-between">
        <v-btn
          height="32"
          class="mx-2 flex-grow-1"
          v-for="item in lists"
          rounded="pill"
          :key="item.path"
          :to="item.path"
        >
          <v-icon class="pa-2">{{item.icon}}</v-icon>
          <span class="d-none d-sm-inline">{{item.title}}</span>
        </v-btn>
      </div>
    </v-bottom-navigation>
		<v-main>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component class="px-2" :is="Component" />
        </keep-alive>
      </router-view>
		</v-main>
    <v-btn
      width="56"
      height="56"
      color="tertiary-c"
      size="x-large"
      class="mr-4 d-lg-none"
      location="bottom right"
      position="fixed"
      rounded="lg"
      style="bottom:80px"
      icon
    >
      <v-icon>mdi-pencil-outline</v-icon>
    </v-btn>
	</v-app>
</template>

<script setup>
import { ref } from 'vue'

const rail = ref(false)
const lists = ref([
	{ title: 'Inbox', path: '/inbox', icon: 'mdi-inbox', message: 4 },
	{ title: 'Articles', path: '/articles', icon: 'mdi-text-box-outline' },
	{ title: 'Direct Message', path: 'directMessage', icon: 'mdi-message-outline' },
	{ title: 'Video Chat', path: 'videoChat', icon: 'mdi-video-outline' },
])
const folders = [
	{ title: 'Freelance' },
	{ title: 'Mortgage' },
	{ title: 'Pine School' },
	{ title: 'Receipts' },
	{ title: 'Taxes' },
	{ title: 'Vacation' },
]
</script>