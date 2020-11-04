import Vue from 'vue'
import toast from './toast.vue';
const ToastConstructor = Vue.extend(toast)
let nodeId = 1

const Notice = (content) => {
    let id = 'toast-' + nodeId++;
    const ToastInstance = new ToastConstructor({
        data: { content: content || nodeId }
    })

    ToastInstance.id = id 
    ToastInstance.vm = ToastInstance.$mount()  
    ToastInstance.dom = ToastInstance.vm.$el
    document.body.appendChild(ToastInstance.dom) 
    ToastInstance.dom.style.zIndex = nodeId + 100;
    ToastInstance.vm.visible = true;
    return ToastInstance.vm
}

export default Notice 