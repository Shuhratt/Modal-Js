
    function _createModal(options){
        const modal = document.createElement('div')
        modal.classList.add('vmodal')
        modal.insertAdjacentHTML('afterbegin', `
            <div class="modal-overlay">
                <div class="modal-window">
                    <div class="modal-header">
                        <span class="modal-title">Title</span>
                        <span class="modal-close">&times;</span>
                    </div>
                    <div class="modal-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ut.</p>
                    </div>
                    <div class="modal-footer">
                        <button>Ok</button>
                        <button>Close</button>
                    </div>
                </div>
            </div>
        `)
        document.body.appendChild(modal)
        return modal

    }
    /*
        title: string,
        closable: boolean,
        content: string,
        width: string(400px)
        destroy(): void
        при клике вне окна закрыть окно если открыто

        setContents(html: string) : void | Public
        onClose(): void;
        onOpen(): void;
        beforeClose: если true то можно закрыть/ false нет
    */

    $.modal = function (options) {
        const $modal = _createModal(options);

        return {

            open(){
                $modal.classList.add('open')
            },
            close() {
                $modal.classList.remove('open')
            },
            destroy(){

            }

        }
    }