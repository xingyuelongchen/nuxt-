import Vue from 'vue'
import toast from './toast.vue';
const ToastConstructor = Vue.extend(toast)
let nId = 1

const Notice = (content) => {
    let id = 'toast-' + nId++;
    const ToastInstance = new ToastConstructor({
        data: { content: content || nId }
    })

    ToastInstance.id = id 
    ToastInstance.vm = ToastInstance.$mount()  
    ToastInstance.dom = ToastInstance.vm.$el
    document.body.appendChild(ToastInstance.dom) 
    ToastInstance.dom.style.zIndex = nId + 1001 // 后插入的Notice组件z-index加一，保证能盖在之前的上面
    ToastInstance.vm.visible = true;
    return ToastInstance.vm
}

export default Notice 