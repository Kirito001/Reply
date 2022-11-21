<template>
	<v-row no-gutters>
		<v-col cols="12" sm="5" class="px-2 py-4">
			<v-text-field
				label="Search replies"
				variant="solo"
				class="mb-4 search"
				density="comfortable"
				prepend-inner-icon="mdi-magnify"
				hide-details
				single-line
			>
        <template #append-inner>
          <v-avatar size="24">
            <v-img :src="inboxList[0].avatar"></v-img>
          </v-avatar>
        </template>
      </v-text-field>
			<v-card
				v-for="(item, index) in inboxList"
				:key="index"
				class="my-2 rounded-lg"
				:color="activeCrad==index?'secondary-c':(dark?'#2d2f33':'#f2f6fc')"
				density="comfortable"
				variant="flat"
				@click="activeCrad=index"
			>
				<v-list-item
					class="mt-2"
					:title="item.userName"
					:subtitle="item.createTime"
					:prepend-avatar="item.avatar"
				>
					<template #append>
						<v-btn size="small" :variant="dark?'tonal':'flat'" icon>
							<v-icon icon="mdi-star-outline"></v-icon>
						</v-btn>
					</template>
				</v-list-item>
				<v-card-title>{{ item.title }}</v-card-title>
				<v-card-text>{{ item.text }}</v-card-text>
				<v-card-text class="pt-0" v-if="item.image">
					<v-img class="rounded-lg" height="120" :src="item.image" cover></v-img>
				</v-card-text>
			</v-card>
		</v-col>
		<v-col cols="12" sm="7" class="px-2 py-4">
			<v-card
				class="mb-2 rounded-lg"
				color="surface"
				density="comfortable"
				variant="flat"
			>
				<v-list class="py-3" :bg-color="dark?'#2d2f33':'#f2f6fc'">
					<v-list-item
						title="Dinner Club"
						subtitle="3 Messages"
					>
						<template #append>
							<v-btn class="rounded-lg" size="small" icon flat>
								<v-icon icon="mdi-trash-can-outline"></v-icon>
							</v-btn>
              <v-btn class="rounded-lg ml-2" size="small" @click="toggleTheme" icon flat>
								<v-icon icon="mdi-weather-night" v-show="dark"></v-icon>
								<v-icon icon="mdi-white-balance-sunny" v-show="!dark"></v-icon>
							</v-btn>
							<v-btn class="rounded-lg ml-2" size="small" variant="flat" icon>
								<v-icon icon="mdi-dots-vertical"></v-icon>
							</v-btn>
						</template>
					</v-list-item>
				</v-list>
				<v-list>
					<v-list-item
						title="So Duri"
						subtitle="20 min ago"
						:prepend-avatar="inboxList[0].avatar"
					>
						<template #append>
							<v-btn color="priamry" size="small" variant="tonal" icon>
								<v-icon icon="mdi-star-outline"></v-icon>
							</v-btn>
						</template>
					</v-list-item>
				</v-list>
				<v-card-subtitle>To me, Ziad, and Lily</v-card-subtitle>
				<v-card-text>I think it's time for us finally try that new noodle shop downtown that doesn't use menus. Anyone else have other suggestions for dinner club this week? I'm so intrigued by this idea of a noodle restaurant where no one gets to order for themselves - couldbe fun, or terible, or both...</v-card-text>
				<v-card-text>So</v-card-text>
				<v-card-actions class="d-flex pa-4">
					<v-btn color="primary" class="flex-grow-1" rounded="pill" variant="tonal">Reply</v-btn>
					<v-btn color="primary" class="flex-grow-1" rounded="pill" variant="tonal">Reply All</v-btn>
				</v-card-actions>
			</v-card>
			<v-card
				class="mb-2 rounded-lg"
				color="surface"
				density="comfortable"
				variant="flat"
			>
				<v-list>
					<v-list-item
						title="Me"
						subtitle="4 min ago"
						:prepend-avatar="inboxList[3].avatar"
					>
						<template #append>
							<v-btn color="priamry" size="small" variant="tonal" icon>
								<v-icon icon="mdi-star-outline"></v-icon>
							</v-btn>
						</template>
					</v-list-item>
				</v-list>
				<v-card-subtitle>To me, Ziad, and Lily</v-card-subtitle>
				<v-card-text>Yes! I forget about that placel! I'm definitely up for taking a risk this week and handing control over to this mysterious noodle chef. I wonder what happens if you have allergies though? Lucky none of us have any otherwise I'd be a bit concemed.</v-card-text>
				<v-card-text>This is going to be great. See you all the usual time?</v-card-text>
				<v-card-actions class="d-flex pa-4">
					<v-btn color="primary" class="flex-grow-1" rounded="pill" variant="tonal">Reply</v-btn>
					<v-btn color="primary" class="flex-grow-1" rounded="pill" variant="tonal">Reply All</v-btn>
				</v-card-actions>
			</v-card>
			<v-card
				class="mb-2 rounded-lg"
				color="surface"
				density="comfortable"
				variant="flat"
			>
				<v-list>
					<v-list-item
						title="Ziad Aouad"
						subtitle="4 min ago"
						:prepend-avatar="inboxList[2].avatar"
					>
						<template #append>
							<v-btn color="priamry" size="small" variant="tonal" icon>
								<v-icon icon="mdi-star-outline"></v-icon>
							</v-btn>
						</template>
					</v-list-item>
				</v-list>
				<v-card-subtitle>To me, Ziad, and Lily</v-card-subtitle>
				<v-card-text>Hey y'all!</v-card-text>
				<v-card-text>Yes! I forget about that placel! I'm definitely up for taking a risk this week and handing control over to this mysterious noodle chef. I wonder what happens if you have allergies though? Lucky none of us have any otherwise I'd be a bit concemed.</v-card-text>
				<v-card-actions class="d-flex pa-4">
					<v-btn color="primary" class="flex-grow-1" rounded="pill" variant="tonal">Reply</v-btn>
					<v-btn color="primary" class="flex-grow-1" rounded="pill" variant="tonal">Reply All</v-btn>
				</v-card-actions>
			</v-card>
		</v-col>
	</v-row>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

let dark = ref(useTheme().global.current.value.dark)

const activeCrad = ref(0)

const inboxList = ref([
	{
		avatar: new URL('@/assets/avatar1.jpg', import.meta.url).href,
		userName: '老强',
		createTime: '10 min ago',
		title: '豆花鱼',
		text: '最近忙吗？昨晚我去你最爱的那家饭馆，点了他们的特色豆花鱼，吃着吃着就想你了。有空咋们视频？',
		image: ''
	}, {
		avatar: new URL('@/assets/avatar2.jpg', import.meta.url).href,
		userName: 'So Duri',
		createTime: '20 min ago',
		title: 'Dinner Club',
		text: "I think it's time for us finally try that new noodle shop downtown that doesn't use menus. Anyone else have other sug...",
		image: ''
	}, {
		avatar: new URL('@/assets/avatar5.jpg', import.meta.url).href,
		userName: 'Lily MacDonald',
		createTime: '2 hour ago',
		title: 'This food show is made for you',
		text: "Ping-you'd love this new food show i started watching it's produced by a thai drummer who started getting recognized for the amazing vegan fo...",
		image: new URL('@/assets/988-600x140.jpg', import.meta.url).href
	}, {
		avatar: new URL('@/assets/avatar4.jpg', import.meta.url).href,
		userName: 'Ziad Aouad',
		createTime: '6 hour ago',
		title: 'Volunteer EMT with me?',
		text: 'What do you think about training to be volunteer EMTs? We could do it together for moral support. Think about it??',
		image: ''
	}
])
const theme = useTheme()
const toggleTheme = () => {
	dark.value = !dark.value
	theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style>
.search .v-field {
	box-shadow: none !important;
	border-radius: 30px;
}
</style>